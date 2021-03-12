import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
import { Icons } from '../images';
import { hexToCSSFilter } from 'hex-to-css-filter';
import { Hues } from '../themes';
import { CustomColours } from '@types';

const random = (x: number) => Math.floor(Math.random() * x);
const d = 35;
const b = Math.floor(d * 4);
const fireSize = b;
const burnSize = b / 4;
const burnCount = 40;

const useStyles = (c: CustomColours) =>
  makeStyles((theme: Theme) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const { filter } = hexToCSSFilter(Hues[c]);

    const heatChilds = (() => {
      const childs = {};
      for (let i = 1; i < burnCount * 2; i++) {
        childs[`& div.heat:nth-of-type(${i})`] = {
          height: `${random(10)}px`,
        };
      }
      return { ...childs };
    })();
    const burnChilds = (() => {
      const childs = {};
      for (let i = 1; i < burnCount * 2; i++) {
        childs[`& div.burn:nth-of-type(${i})`] = {
          height: `${random(burnSize / 2)}px`,
          marginLeft: `${random(fireSize) - fireSize / 2}px`,
          animation: `$burning ${random(2000) + 3000}ms infinite linear`,
        };
      }
      return { ...childs };
    })();

    return {
      root: {
        position: 'relative',
        height: d,
        width: d,
        filter: `drop-shadow(0px 0px 4px ${theme.palette[c].light})`,
      },
      pin: {
        height: '100%',
        width: '100%',
        filter,
      },

      ui: {
        filter: 'opacity(0.5) blur(3px)',
        zIndex: -10,
        borderRadius: 40,
        position: 'absolute',
        backgroundColor: theme.palette[c].light,
        overflow: 'hidden',
        height: b,
        width: d / 2,
        bottom: d / 4,
        left: d / 4,
        marginTop: `${-fireSize / 4}px`,
        transition: '100ms',
      },
      fire: {
        position: 'relative',
        height: '100%',
        width: '100%',
        background: theme.palette[c].light,
        filter: 'blur(10px) contrast(30)',
        borderBottomColor: 'transparent',
        borderRadius: '40%',
        boxSizing: 'border-box',
        transform: 'scale(0.2, 5)',
        ...burnChilds,
        ...heatChilds,
      },
      burn: {
        position: 'absolute',
        top: fireSize,
        left: `${-burnSize / 2}px`,
        width: burnSize,
        height: burnSize,
        backgroundColor: 'white',
        borderRadius: '100%',
      },

      '@keyframes burning': {
        '0%': {
          transform: 'translateY(0)',
        },
        '100%': {
          transform: `translateY(${-fireSize + burnSize}px)`,
        },
      },
    };
  })();

type MapMarkerProps = {
  indexNo?: number;
};

export const MapMarker: React.FC<MapMarkerProps> = ({ indexNo = random(10) }) => {
  const colour = [
    'red',
    'orange',
    'lime',
    'blue',
    'yellow',
    'purple',
    'turquoise',
    'cyan',
    'violet',
    'green',
  ][indexNo] as CustomColours;

  const cs = useStyles(colour);

  return (
    <div className={cs.root}>
      <img src={Icons[indexNo]} className={cs.pin} />
      <div className={cs.ui}>
        <div className={cs.fire}>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
          <div className={clsx(cs.burn, 'burn', 'heat')}></div>
          <div className="heat"></div>
        </div>
      </div>
    </div>
  );
};
