import {
  FooterApp,
  SmallText,
  SpanHeart,
  SpanName,
  LinkFooter,
} from './AppFooter.styled';

export const AppFooter = () => {
  return (
    <FooterApp>
      <SmallText>
        &copy; {new Date().getFullYear()} Developed with{' '}
        <SpanHeart role="img" aria-label="heart">
          ❤
        </SpanHeart>
        by
        <LinkFooter
          href="https://github.com/HelenaGingembre"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
          //   className={styles.link}
        >
          <SpanName>HelenaGingembre</SpanName>
        </LinkFooter>
      </SmallText>
    </FooterApp>
  );
};
