import { CityPage } from '@/components/CityPage/CityPage';
import classes from '@app/App.module.scss';

export default function Seoul() {
  return (
    <>
      <div className={classes.app}>
        <CityPage />
      </div>
    </>
  );
}
