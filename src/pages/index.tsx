import clsx from 'clsx';
import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Title from '../components/Title';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Article from '../components/Article';
import ArticleStack from '../components/ArticleStack';
import CommunityCard from '../components/CommunityCard';
import SdkDarkIcon from '@site/static/icons/SdkDark';
import SdkLightIcon from '@site/static/icons/SdkLight';
import ContractDarkIcon from '@site/static/icons/ContractDark';
import ExplorerDarkIcon from '@site/static/icons/ExplorerDark';
import ContractLightIcon from '@site/static/icons/ContractLight';
import ExplorerLightIcon from '@site/static/icons/ExplorerLight';
import DevelopersDarkIcon from '@site/static/icons/pictograms/DevelopersDark';
import DevelopersLightIcon from '@site/static/icons/pictograms/DevelopersLight';
import ContributorsDarkIcon from '@site/static/icons/pictograms/ContributorsDark';
import ContributorsLightIcon from '@site/static/icons/pictograms/ContributorsLight';
import Translate, { translate } from '@docusaurus/Translate';

const Homepage = () => {
  const articleStackSectionData = [
    {
      LightIcon: SdkLightIcon,
      DarkIcon: SdkDarkIcon,
      title: translate({ message: 'Why build on ImmutableX?' }),
      subtitle: translate({
        message:
          'ImmutableX is the premier layer 2 solution, with low fees and easy-to-use APIs and SDKs whilst maintaining the security of Ethereum',
      }),
      buttonText: translate({ message: 'Learn more' }),
      link: '/docs/what-is-immutablex',
    },
    {
      LightIcon: ContractLightIcon,
      DarkIcon: ContractDarkIcon,
      title: translate({ message: "Immutable's layer 2 solutions" }),
      subtitle: translate({
        message:
          'Learn about the different layer 2 solutions and how they work.',
      }),
      buttonText: translate({ message: 'Learn more' }),
      link: '/docs/immutable-layer-2',
    },
    {
      LightIcon: ExplorerLightIcon,
      DarkIcon: ExplorerDarkIcon,
      title: 'Fees',
      subtitle: 'What are they for the different functionlities?',
      buttonText: 'See fees table',
      link: '/docs/fees',
    },
    {
      LightIcon: SdkLightIcon,
      DarkIcon: SdkDarkIcon,
      title: translate({ message: 'Deep dive into smart contracts' }),
      subtitle: translate({
        message:
          'Everything you need to know about smart contracts types, functions and standards.',
      }),
      buttonText: translate({ message: 'Learn more' }),
      link: '/docs/anatomy-smart-contract',
    },
    {
      LightIcon: ContractLightIcon,
      DarkIcon: ContractDarkIcon,
      title: translate({ message: 'Deep dive into minting' }),
      subtitle: translate({
        message:
          'Everything you need to know about creating new tokens on L1 and L2.',
      }),
      buttonText: translate({ message: 'Learn more' }),
      link: '/docs/deep-dive-minting',
    },
    {
      LightIcon: ExplorerLightIcon,
      DarkIcon: ExplorerDarkIcon,
      title: 'Asset royalties',
      subtitle:
        "What they are, how they work, how they're enforced and how to implement them on ImmutableX",
      buttonText: 'Learn more',
      link: '/docs/deep-dive-royalties',
    },
  ];

  const articleSection1Data = [
    {
      LightIcon: DevelopersLightIcon,
      DarkIcon: DevelopersDarkIcon,
      title: translate({ message: 'Launch a web3 game' }),
      subtitle: (
        <>
          <Translate>
            Step by step guide to deploying your own NFT smart contract and
            minting assets for your game or collection.
          </Translate>
        </>
      ),
      cta: [
        {
          link: '/docs/zero-to-hero-nft-minting',
          text: translate({ message: 'NFT minting tutorial' }),
        },
        {
          link: '/docs/how-to-mint-assets',
          text: translate({ message: 'Integrate minting in your application' }),
        },
      ],
    },
    {
      LightIcon: ContributorsLightIcon,
      DarkIcon: ContributorsDarkIcon,
      title: translate({ message: 'Build an NFT marketplace' }),
      subtitle: translate({
        message:
          'Guides to help you display assets, manage users and enable trading on your very own application.',
      }),
      cta: [
        {
          link: '/docs/how-to-install-initialize',
          text: translate({ message: 'Get started with our SDKs' }),
        },
        {
          link: '/docs/how-to-get-data',
          text: translate({ message: 'Display NFTs in your marketplace' }),
        },
      ],
    },
    {
      LightIcon: ContributorsLightIcon,
      DarkIcon: ContributorsDarkIcon,
      title: translate({ message: 'Check out our developer tools' }),
      subtitle: translate({
        message: 'Find out what SDKs we have and how they go together.',
      }),
      cta: [
        {
          link: '/docs/sdks',
          text: translate({ message: 'SDKs overview' }),
        },
      ],
    },
  ];

  const articleSection2Data = [
    {
      LightIcon: DevelopersLightIcon,
      DarkIcon: DevelopersDarkIcon,
      title: translate({ message: 'Developer grants' }),
      subtitle: (
        <>
          <Translate>
            Early BUIDL grants, marketing support, technical guidance and much
            more.
          </Translate>
        </>
      ),
      cta: [
        {
          link: '/docs/contact#building-on-immutable-x',
          text: translate({ message: 'Find out more' }),
        },
      ],
    },
    {
      LightIcon: ContributorsLightIcon,
      DarkIcon: ContributorsDarkIcon,
      title: translate({ message: 'Help contribute' }),
      subtitle: translate({
        message:
          'Improve our documentation by contributing and help build the ImmutableX developer ecosystem!',
      }),
      cta: [
        {
          link: '/docs/contributing',
          text: translate({ message: 'Contributor guidelines' }),
        },
      ],
    },
  ];

  const communitySectionData = [
    {
      title: translate({ message: 'ImmutableX forum' }),
      subtitle: translate({
        message:
          'Review past questions & get answers to your queries over on the forum.',
      }),
      buttonText: translate({ message: 'Visit the forum' }),
      isLongCard: true,
      url: 'https://forum.immutable.com',
    },
    {
      title: translate({ message: 'Discord' }),
      subtitle: translate({
        message:
          'Join the conversation! Interact with the ImmutableX developer community on Discord.',
      }),
      buttonText: translate({ message: 'Join us' }),
      isLongCard: false,
      url: 'https://discord.com/invite/Dmhp398dna',
    },
    {
      title: translate({ message: 'Twitter' }),
      subtitle: translate({
        message:
          'Follow us on Twitter for the latest product updates & company news.',
      }),
      buttonText: translate({ message: 'Follow us' }),
      isLongCard: false,
      url: 'https://twitter.com/Immutable',
    },
    {
      title: translate({ message: 'Reddit' }),
      subtitle: translate({
        message: 'Join our subreddit for community memes, updates and more.',
      }),
      buttonText: translate({ message: 'Join subreddit' }),
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
                <Translate>Build, launch & grow on</Translate>
                <br className={styles.displayForExtraSmall} /> IMX
              </div>
            }
            subtitle={
              <>
                <Translate>
                  SDKs, APIs, access to funding, and real-time support to make
                  building web3 applications simple
                </Translate>
              </>
            }
            className={styles.heroTitle}
          />
          <div className={styles.heroButtonSection}>
            <a href="/docs/start-here">
              <Button onClick={() => console.log('')}>
                <Translate>Explore</Translate>{' '}
                <span className={styles.displayFromExtraSmall}>
                  <Translate>developer</Translate>
                </span>{' '}
                <Translate>docs</Translate>
              </Button>
            </a>
            <a href="/docs/guides">
              <Button onClick={() => console.log('')}>
                <Translate>See</Translate>{' '}
                <span className={styles.displayFromExtraSmall}>
                  <Translate>guides</Translate>
                </span>
              </Button>
            </a>
          </div>
          <br />
          <br />
          <br />

          <div
            className={clsx(
              styles.articlesSection1,
              styles.displayFromSmall,
              styles.articlesSection2
            )}
            style={{ alignItems: 'center' }}
          >
            {articleSection1Data.map((article, index) => (
              <Article {...article} key={index} />
            ))}
          </div>
          <br />
          <br />
          <br />

          <Title
            title={translate({ message: 'Learn more' })}
            subtitle={
              <>
                <Translate>
                  Deep dive into web3 concepts to supercharge your blockchain
                  development.
                </Translate>
              </>
            }
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

          <Title
            title={translate({ message: 'Join the community' })}
            subtitle={
              <>
                <Translate>Be a part of our community!</Translate>
              </>
            }
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
