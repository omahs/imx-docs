/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore: weird docusaurus thing, this still works
import { useDoc } from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import Button from '@site/src/components/Button';
import styles from './styles.module.css';
function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm'
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterEditMetaRow,
        styles.docFooterEditMetaRow,
        'row'
      )}
    >
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }

  const addSurvicateEventListener = () => {
    window._sva.addEventListener(
      'question_answered',
      function (surveyId, questionId, answer) {
        // TODO: persist answer to cache
      }
    );
  };

  useEffect(() => {
    window.addEventListener('SurvicateReady', function () {
      addSurvicateEventListener();
    });

    if (window._sva !== undefined) {
      addSurvicateEventListener();
    }
  }, []);

  const handleSurvicate = () => {
    const surveyId = (siteConfig.customFields.survicate as any).surveyId;
    return window._sva.showSurvey(surveyId, {
      forceDisplay: true,
      displayMethod: 'immediately',
    });
  };

  return (
    <footer
      className={clsx(
        ThemeClassNames.docs.docFooter,
        'docusaurus-mt-lg',
        styles.docFooterWrapper
      )}
    >
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
      <Button variant="solid" onClick={handleSurvicate}>
        {'Rate this page ⭐️'}
      </Button>
    </footer>
  );
}
