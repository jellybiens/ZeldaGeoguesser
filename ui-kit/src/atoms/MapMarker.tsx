import * as React from 'react';
import { makeStyles, lighten, Theme } from '@material-ui/core';
import beam1 from '../images/lightbeam1.gif';
import beam2 from '../images/lightbeam2.gif';
import beam3 from '../images/lightbeam3.gif';
import { Icons } from '../images';
import { hexToCSSFilter } from 'hex-to-css-filter';
import { Hues } from '../themes';
import { CustomColours } from '@types';

const random = (x: number, y = 0) => Math.floor(Math.random() * x + y);
const d = 35;
const b = Math.floor(d * 4);
const w = 0.25; // wobble factor of flames
const t = [0, 1 * w, 2 * w, 3 * w]; // wobble shake postiions
const s = 0;

const useStyles = (c: CustomColours) =>
  makeStyles((theme: Theme) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const { filter } = hexToCSSFilter(Hues[c]);
    const glowColour = lighten(theme.palette[c].light, 0.8);

    return {
      root: {
        position: 'relative',
        height: d,
        width: d,
        filter: `drop-shadow(0px 0px 4px ${theme.palette[c].light})`,
      },
      pinContainer: {
        height: '100%',
        width: '100%',
        animation: `$glow 4s infinite`,
      },
      pinWrapper: {
        height: '100%',
        width: '100%',
        filter: `
        drop-shadow(0 ${s}px ${s}px ${theme.palette[c].dark}) 
        drop-shadow(${s}px 0 ${s}px ${theme.palette[c].dark})
        
        drop-shadow(-${s / 2}px 0 ${s}px ${theme.palette[c].dark})
        drop-shadow(0 -${s / 2}px ${s}px ${theme.palette[c].dark})
        
        drop-shadow(${s}px -${s / 2}px ${s}px ${theme.palette[c].dark})
        drop-shadow(-${s / 2}px ${s}px ${s}px ${theme.palette[c].dark})
        
        drop-shadow(${s}px ${s}px ${s}px ${theme.palette[c].dark})
        `,
      },
      pin: {
        height: '100%',
        width: '100%',
        filter,
      },
      beacon: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        filter: 'blur(1px) drop-shadow(0px 0px 10px #fff)', // blur 16px
        transform: 'scaleX(2)', // scaleX(0.75) // TODO: also give nice results
        '&::before': {
          position: 'absolute',
          content: '""',
          height: b,
          width: d,
          bottom: 0,
          left: 0,
          backgroundSize: 'cover',
          opacity: 1,
          background: `url(${beam2}) repeat center center`,
          filter,
        },
        '&::after': {
          position: 'absolute',
          content: '""',
          height: b,
          width: d,
          bottom: 0,
          left: 0,
          animation: `$shake 10s infinite`,
          backgroundSize: 'cover',
          background: `url(${beam1}) repeat center center`,
          opacity: 0.7,
          filter: 'blur(3px)',
        },
      },

      '@keyframes shake': {
        '0%': { transform: `translate(${t[1]}px, ${t[1]}px) rotate(0deg)` },
        '10%': { transform: `translate(-${t[1]}px, -${t[2]}px) rotate(-${t[1]}deg)` },
        '20%': { transform: `translate(-${t[3]}px, ${t[0]}px) rotate(${t[1]}deg)` },
        '30%': { transform: `translate(${t[3]}px, ${t[2]}px) rotate(0deg)` },
        '40%': { transform: `translate(${t[1]}px, -${t[1]}px) rotate(${t[1]}deg)` },
        '50%': { transform: `translate(-${t[1]}px, ${t[2]}px) rotate(-${t[1]}deg)` },
        '60%': { transform: `translate(-${t[3]}px, ${t[1]}px) rotate(0deg)` },
        '70%': { transform: `translate(${t[3]}px, ${t[1]}px) rotate(-${t[1]}deg)` },
        '80%': { transform: `translate(-${t[1]}px, -${t[1]}px) rotate(${t[1]}deg)` },
        '90%': { transform: `translate(${t[1]}px, ${t[2]}px) rotate(0deg)` },
        '100%': { transform: `translate(${t[1]}px, -${t[2]}px) rotate(-${t[1]}deg)` },
      },
      '@keyframes glow': {
        '0%': { filter: `drop-shadow(0px 0px 5px ${glowColour})` },
        '50%': { filter: `drop-shadow(0px 0px 3px ${glowColour})` },
        '100%': { filter: `drop-shadow(0px 0px 5px ${glowColour})` },
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
      <div className={cs.beacon}></div>
      <div className={cs.pinContainer}>
        <div className={cs.pinWrapper}>
          <img src={Icons[indexNo]} className={cs.pin} />
        </div>
      </div>
    </div>
  );
};
