import clsx from 'clsx';
import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Title from '../components/Title';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Article from '../components/Article';
import IconButton from '../components/IconButton';
import GlobalHeader from '../components/GlobalHeader';
import ArticleStack from '../components/ArticleStack';
import CommunityCard from '../components/CommunityCard';
import StatisticsCard from '../components/StatisticsCard';
import SdkDarkIcon from '@site/static/icons/SdkDark';
import SdkLightIcon from '@site/static/icons/SdkLight';
import SaleDarkIcon from '@site/static/icons/SaleDark';
import SaleLightIcon from '@site/static/icons/SaleLight';
import GoSdkDarkIcon from '@site/static/icons/GoSdkDark';
import DappsDarkIcon from '@site/static/icons/DappsDark';
import GoSdkLightIcon from '@site/static/icons/GoSdkLight';
import DappsLightIcon from '@site/static/icons/DappsLight';
import RightArrowIcon from '@site/static/icons/RightArrow';
import ContractDarkIcon from '@site/static/icons/ContractDark';
import ExplorerDarkIcon from '@site/static/icons/ExplorerDark';
import NftDarkIcon from '@site/static/icons/pictograms/NftDark';
import ContractLightIcon from '@site/static/icons/ContractLight';
import ExplorerLightIcon from '@site/static/icons/ExplorerLight';
import NftLightIcon from '@site/static/icons/pictograms/NftLight';
import UtilityDarkIcon from '@site/static/icons/pictograms/UtilityDark';
import UtilityLightIcon from '@site/static/icons/pictograms/UtilityLight';
import BugBountyDarkIcon from '@site/static/icons/pictograms/BugBountyDark';
import BugBountyLightIcon from '@site/static/icons/pictograms/BugBountyLight';
import DevelopersDarkIcon from '@site/static/icons/pictograms/DevelopersDark';
import DevelopersLightIcon from '@site/static/icons/pictograms/DevelopersLight';
import MarketplaceDarkIcon from '@site/static/icons/pictograms/MarketplaceDark';
import MarketplaceLightIcon from '@site/static/icons/pictograms/MarketplaceLight';
import ContributorsDarkIcon from '@site/static/icons/pictograms/ContributorsDark';
import ContributorsLightIcon from '@site/static/icons/pictograms/ContributorsLight';

const Homepage = () => {
  const articleSectionData = [
    {
      LightIcon: NftLightIcon,
      DarkIcon: NftDarkIcon,
      title: (
        <>
          Launch an
          <br className={styles.hideForExtraSmall} /> NFT project
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['IP Collectible projects', 'Web3 NFT games'],
    },
    {
      LightIcon: MarketplaceLightIcon,
      DarkIcon: MarketplaceDarkIcon,
      title: (
        <>
          Build a
          <br className={styles.hideForExtraSmall} /> Marketplace
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['Create a new marketplace', 'Integrating IMX'],
    },
    {
      LightIcon: UtilityLightIcon,
      DarkIcon: UtilityDarkIcon,
      title: (
        <>
          Build
          <br className={styles.hideForExtraSmall} /> WEB3 utility
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['IP Collectible projects', 'Web3 NFT games'],
    },
  ];

  const articleStackSectionData = [
    {
      LightIcon: SdkLightIcon,
      DarkIcon: SdkDarkIcon,
      title: 'IMX SDKs',
      subtitle:
        'View all the SDKs on offer to easily integrate with Immutable X.',
      buttonText: 'Learn More',
      link: '/docs/sdks',
    },
    {
      LightIcon: ContractLightIcon,
      DarkIcon: ContractDarkIcon,
      title: 'Code Examples',
      subtitle: 'Accelerate your build with code snippets and samples.',
      buttonText: 'Learn More',
      link: '/docs/code-examples',
    },
    {
      LightIcon: ExplorerLightIcon,
      DarkIcon: ExplorerDarkIcon,
      title: 'Immutascan',
      subtitle: 'Explore live transactions and trade events in real time.',
      buttonText: 'Visit Immutascan',
      link: 'https://immutascan.io',
    },
  ];

  const articleSection2Data = [
    {
      LightIcon: DevelopersLightIcon,
      DarkIcon: DevelopersDarkIcon,
      title: 'Developer Grants',
      subtitle: (
        <>Immutable X offers grants to help you fund your next web3 project.</>
      ),
      cta: [
        {
          link: '/docs/contact#building-on-immutable-x',
          text: 'Learn More',
        },
      ],
    },
    // {
    //   LightIcon: BugBountyLightIcon,
    //   DarkIcon: BugBountyDarkIcon,
    //   title: 'Bug bounty',
    //   subtitle: (
    //     <>
    //       Find out our vulnerabilities
    //       <br /> and win a bounty.
    //     </>
    //   ),
    //   cta: ['Know more'],
    // },
    {
      LightIcon: ContributorsLightIcon,
      DarkIcon: ContributorsDarkIcon,
      title: 'Help Contribute',
      subtitle: 'Help us improve our documentation by contributing!',
      cta: [
        {
          link: '/docs/contributing',
          text: 'Contributor Guidelines',
        },
      ],
    },
  ];

  const statisticsSectionData = [
    {
      image: '/static/img/vyWorlds.png',
      statisticsNumber: '18m',
      statisticsLabel: 'Gas saved',
      subtitle: 'VY Worlds',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus.',
    },
    {
      image: '/static/img/illuvium.png',
      statisticsNumber: '20m',
      statisticsLabel: 'NFTs TRADED',
      subtitle: 'Illuvium',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus.',
    },
  ];

  const communitySectionData = [
    {
      title: 'ImmutableX forum',
      subtitle:
        'Review past questions & get answers to your queries over on the forum.',
      buttonText: 'Visit the Forum',
      isLongCard: true,
      url: 'https://forum.immutable.com',
    },
    {
      title: 'Discord',
      subtitle:
        'Join the conversation! Interact with the Immutable X developer community on Discord.',
      buttonText: 'Join the Discord',
      isLongCard: false,
      url: 'https://discord.com/invite/Dmhp398dna',
    },
    {
      title: 'Twitter',
      subtitle:
        'Follow us on Twitter for the latest product updates & company news.',
      buttonText: 'Follow Us',
      isLongCard: false,
      url: 'https://twitter.com/Immutable',
    },
    {
      title: 'Reddit',
      subtitle: 'Join our subreddit for community memes, updates and more.',
      buttonText: 'Join Subreddit',
      isLongCard: true,
      url: 'https://www.reddit.com/r/ImmutableX/',
    },
  ];

  return (
    <div className="homepage">
      <Layout>
        <div className={styles.root}>
          <div className={styles.heroImage} />
          <Title
            title={
              <div className={clsx('grad', styles.title)}>
                Build with
                <br className={styles.displayForExtraSmall} /> Immutable X
              </div>
            }
            subtitle={
              <>
                Everything you need to superpower your next web3 project,
                without comprising security or scalability.
              </>
            }
            className={styles.heroTitle}
          />
          <div className={styles.heroButtonSection}>
            <a href="/docs/welcome">
              <Button onClick={() => console.log('')}>
                Explore{' '}
                <span className={styles.displayFromExtraSmall}>Developer</span>{' '}
                Docs
              </Button>
            </a>
            {/* <a href="/docs/welcome">
              <IconButton
                onClick={() => console.log('')}
                Icon={<RightArrowIcon />}
                className={styles.displayFromExtraSmall}
              />
            </a> */}
          </div>
          <br />
          <br />
          <br />

          {/* Removing this section until the content is ready */}
          {/* <div className={styles.articlesSection}>
            {articleSectionData.map((article, index) => (
              <Article {...article} key={index} />
            ))}
          </div> */}

          <Title
            title="Developer Tools"
            subtitle={<>Everything you need to start building today.</>}
          />
          <div className={styles.articleStackSection}>
            {articleStackSectionData.map((article, index) => (
              <ArticleStack {...article} key={index} />
            ))}
          </div>

          <div
            className={clsx(
              styles.articlesSection,
              styles.displayFromSmall,
              styles.articlesSection2
            )}
            style={{ alignItems: 'center' }}
          >
            {articleSection2Data.map((article, index) => (
              <Article {...article} key={index} />
            ))}
          </div>
          {/* Removing until content is ready */}
          {/* <Title
            title="Built with IMX"
            subtitle={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                <br /> ultrices fringilla pharetra nullam placerat tellus.
              </>
            }
          />
          <div className={styles.statisticsSection}>
            {statisticsSectionData.map((statisticsInfo, index) => (
              <StatisticsCard {...statisticsInfo} key={index} />
            ))}
          </div> */}

          <Title
            title="Join The Community"
            subtitle={<>Be a part of our community!</>}
          />
          <div className={styles.communityCardSection}>
            {communitySectionData.map((communityInfo, index) => (
              <CommunityCard {...communityInfo} key={index} />
            ))}
          </div>

          <Footer />
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
