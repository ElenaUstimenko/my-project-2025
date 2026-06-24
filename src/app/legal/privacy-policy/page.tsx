import { PolicyPage } from '@/components/LegalDocuments/PrivacyPolicy/PrivacyPolicyPage';
import classes from '@app/App.module.scss';

export default function Policy() {
  return (
    <>
      <div className={classes.app}>
        <PolicyPage />
      </div>
    </>
  );
}
