import React from 'react';
import { findDOMNode } from 'react-dom';
import * as tfvis from '@tensorflow/tfjs-vis';
import { Box, Text, Heading } from 'grommet';
import { PagingTable } from 'grommet-controls';
import { ResponsiveContext } from 'grommet/contexts';

const STATES_MAP = ['new', 'running', 'done', 'error'];

export const formatTraingTime = (date, locale = 'en-us') => (
  date ? (new Date(date)).toLocaleDateString(locale, {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }) : undefined
);

export const periodToTime = (duration) => {
  if (!duration) {
    return {
      time: 0,
      units: 'ms',
    };
  }
  const hours = (duration / (1000 * 60 * 60)).toFixed(0);
  const minutes = (duration / (1000 * 60)).toFixed(0);
  if (hours > 0) {
    return {
      time: `${hours}:${minutes}`,
      units: 'hrs',
    };
  }
  const seconds = (duration / 1000).toFixed(0);
  if (minutes > 0) {
    return {
      time: `${minutes}:${seconds}`,
      units: 'min',
    };
  }
  const milliseconds = (duration).toFixed(0);
  if (seconds > 0) {
    return {
      time: `${seconds}:${milliseconds}`,
      units: 'sec',
    };
  }
  return {
    time: `${milliseconds}`,
    units: 'ms',
  };
};

export default class TrialsTable extends React.Component {
  onExpand = (row) => {
    const { data, labels } = this.props;
    const h = row.original.result.history;
    const hasAccuracy = (h.acc !== undefined && h.val_acc !== undefined);
    const { confMatrixData } = row.original.result;
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill='horizontal' >
            <Box direction='row-responsive' gap='medium' pad={{ vertical: 'medium' }}>
              <Box
                width={hasAccuracy && size !== 'small' ? '50%' : '100%'}
                height='small'
              >
                <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                  loss
                </Box>
                <Box
                  ref={(r) => {
                    const container = findDOMNode(r);
                    if (container) {
                      const logs = h.loss.map((l, i) => (
                        {
                          loss: l,
                          val_loss: h.val_loss ? h.val_loss[i] : undefined,
                        }
                      ));
                      tfvis.show.history(container, logs, ['loss', 'val_loss'],
                      {
                        width: container.offsetWidth,
                        height: container.offsetHeight,
                        yLabel: 'loss',
                        xLabel: 'epoch',
                      });
                    }
                  }}
                  fill='vertical'
                />
              </Box>
              {hasAccuracy && (
                <Box
                  width={size !== 'small' ? '50%' : '100%'}
                  height='small'
                >
                  <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                    accuracy
                  </Box>
                  <Box
                    ref={(r) => {
                      const container = findDOMNode(r);
                      if (container) {
                        const logs = h.acc.map((a, i) => (
                          {
                            acc: a,
                            val_acc: h.val_acc ? h.val_acc[i] : undefined,
                          }
                        ));
                        tfvis.show.history(container, logs, ['acc', 'val_acc'],
                        {
                          width: container.offsetWidth,
                          height: container.offsetHeight,
                          yLabel: 'accuracy',
                          xLabel: 'epoch',
                        });
                      }
                    }}
                    fill='vertical'
                  />
                </Box>
              )}
            </Box>
            <Box direction='row' gap='medium' height='medium' pad={{ vertical: 'medium' }}>
              {data && confMatrixData && (
              <Box
                width='50%'
                fill='vertical'
                alignContent='between'
              >
                <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                    confusion matrix
                </Box>
                <Box
                  ref={(r) => {
                    const container = findDOMNode(r);
                    if (container) {
                      tfvis.render.confusionMatrix(
                        { values: confMatrixData, labels },
                        container,
                        { shadeDiagonal: true },
                    );
                    }
                  }}
                  fill='vertical'
                />
              </Box>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
  render() {
    const { trials } = this.props;
    let hasHistory;
    let argColumns = [];
    const floatColumn = {
      Cell: cell => (Number(cell.value) !== cell.value || cell.value % 1 === 0
        ? cell.value : parseFloat(cell.value).toFixed(4)),
    };
    if (trials.length > 0) {
      if (typeof trials[0].args === 'number') {
        argColumns.push({
          Header: 'parameter',
          accessor: 'args',
          getProps: () => ({ align: 'end' }),
          ...floatColumn,
        });
      } else if (typeof trials[0].args === 'object') {
        argColumns = Object.keys(trials[0].args)
          .map(key => ({
            Header: key,
            accessor: `args.${key}`,
            getProps: () => ({ align: 'end' }),
            ...floatColumn,
          }));
      }
    }
    let resultColumns = [];
    if (trials.length > 0) {
      hasHistory = trials[0].result.history !== undefined;
      resultColumns = Object.keys(trials[0].result)
        .filter(key => (typeof trials[0].result[key] !== 'object' &&
            !Array.isArray(trials[0].result[key])))
        .map(key => ({
          Header: key,
          accessor: `result.${key}`,
          responsiveHide: key !== 'status' ? ['small'] : undefined,
          getProps: () => ({ align: 'end' }),
          ...floatColumn,
        }));
    }
    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        maxWidth: 60,
      },
      {
        Header: 'state',
        responsiveHide: ['small'],
        accessor: 'state',
        maxWidth: 140,
        Cell: cell => (<Text weight='bold'>{STATES_MAP[cell.value]}</Text>),
      },
      {
        Header: 'start',
        responsiveHide: ['small'],
        accessor: 'book_time',
        maxWidth: 150,
        Cell: cell => (<Text weight='bold'>{formatTraingTime(cell.value)}</Text>),
        getProps: () => ({ align: 'end' }),

      },
      {
        Header: 'update',
        responsiveHide: ['small'],
        id: 'updateTime',
        accessor: 'refresh_time',
        Cell: (cell) => {
          const period = periodToTime(cell.original.refresh_time - cell.original.book_time);
          return `${period.time} ${period.units}`;
        },
        maxWidth: 150,
        getProps: () => ({ align: 'end' }),
      },
      {
        Header: 'Arguments',
        decorations: {
          header: { align: 'center' },
        },
        columns: argColumns,
      },
      {
        Header: 'Results',
        decorations: {
          header: { align: 'center' },
        },
        columns: resultColumns,
      },
    ];
    return (
      <Box fill='horizontal' pad={{ bottom: 'large' }}>
        <Box align='center'>
          <Heading>Trials</Heading>
        </Box>
        <PagingTable
          columns={columns}
          data={trials}
          SubComponent={hasHistory ? this.onExpand : undefined}
          defaultSorted={[{
            id: 'id',
            desc: false,
          }]}
          decorations={{
            table: {
              elevation: 'large',
              border: 'all',
            },
            headerGroup: {
              background: 'brand',
              size: 'large',
            },
            header: {
              border: 'all',
              align: 'center',
            },
            body: {
              animation: {
                type: 'fadeIn',
                duration: 2000,
                size: 'large',
              },
            },
            rowOdd: {
              background: { color: 'light-1' },
            },
            pagination: { pad: { top: 'medium' } },
          }}
        />
      </Box>
    );
  }
}
