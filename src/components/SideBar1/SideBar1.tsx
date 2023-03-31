import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CalendarTodayIcon } from './CalendarTodayIcon';
import { Group1Icon } from './Group1Icon';
import { HomeIcon } from './HomeIcon';
import { NotificationsIcon } from './NotificationsIcon';
import { PersonIcon } from './PersonIcon';
import { ShowChartIcon } from './ShowChartIcon';
import classes from './SideBar1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:16 */
export const SideBar1: FC<Props> = memo(function SideBar1(props = {}) {
  return (
    <>
      <div className={classes.rectangle4}></div>
      <div className={classes.logo1}></div>
      <div className={classes.home}>
        <HomeIcon className={classes.icon} />
      </div>
      <div className={classes.notifications}>
        <NotificationsIcon className={classes.icon2} />
      </div>
      <div className={classes.calendarToday}>
        <CalendarTodayIcon className={classes.icon3} />
      </div>
      <div className={classes.showChart}>
        <ShowChartIcon className={classes.icon4} />
      </div>
      <div className={classes.person}>
        <PersonIcon className={classes.icon5} />
      </div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon6} />
      </div>
    </>
  );
});
