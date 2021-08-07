import * as React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

import * as presentation1 from 'common/assets/download/presentation-lesdozor-1.pdf';
import * as presentation2 from 'common/assets/download/presentation-lesdozor-2.pdf';
import * as presentationIcon from 'common/assets/images/icons/presentation.png';
import * as splashScreen from 'common/assets/images/video-splash-screen.jpg';
import * as videoLesdozor from 'common/assets/download/lesdozor.mp4';
import { Title } from 'components/Title';
import { certificates } from './constants';
import { IDownloadProps, IDownloadState } from './models';

const Content = styled.div``;
const Presentations = styled.article``;
const PresentationIcon = styled.img`
  height: 30px;
  margin-right: 10px;
`;
const PresentationText = styled.span`
  font-size: 18px;
  word-break: break-word;
`;
const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;
// TODO delete
const DownloadLinkA = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    cursor: pointer;
  }
`;
const DownloadLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin: 0 auto 10px;

  @media screen and (max-width: 520px) {
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;
  }
`;
const Trophies = styled.article`
  margin-bottom: 20px;
`;
const TrophiesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Trophy = styled.div`
  padding: 10px 20px;
`;
const TrophyImage = styled.img`
  height: 150px;
`;
const Video = styled.video`
  margin-bottom: 15px;
`;
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 750px) {
    ${Video} {
      height: 100%;
      width: 90%;
    }
  }
`;

const TrophyOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;
// TODO: revise styles
const TrophyFullScreen = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;

  // @media screen and (max-width: 400px) {
  //   object-fit: contain;
  //   width: 100%;
  // }
`;
// TODO: revise styles
const TrophyDownloadButton = styled.a`
  text-decoration: none;
  color: #ffffff;
  align-self: center;
  font-size: 18px;
  margin-top: 5px;
  padding: 2px 10px;
  border: 1px solid #ffffff;
  border-radius: 14px;
  background: #727272;
  opacity: 0.75;

  :hover {
    opacity: 0.9;
  }
`;

// TODO: need refactoring - separate
export class Download extends React.PureComponent<IDownloadProps, IDownloadState> {
  trophyDownloadButton: HTMLAnchorElement;

  constructor(props: IDownloadProps) {
    super(props);

    this.state = {
      isTrophyOpened: false,
      trophyLink: '',
    };
  }

  onTrophyClick = (trophyLink: string) => {
    this.setState({
      isTrophyOpened: true,
      trophyLink,
    });
  }

  closeTrophy = () => {
    this.setState({
      isTrophyOpened: false,
      trophyLink: '',
    });
  }

  render() {
    return (
      <Content>
        <Presentations>
          <Title text="Презентации" />
          <DownloadLinks>
            <DownloadLink download href={presentation1}>
              <PresentationIcon src={presentationIcon} />
              <PresentationText>Описание и характеристики системы Лесной Дозор</PresentationText>
            </DownloadLink>
            <DownloadLink download href={presentation2}>
              <PresentationIcon src={presentationIcon} />
              <PresentationText>Описание программного обеспечения Лесной Дозор</PresentationText>
            </DownloadLink>
          </DownloadLinks>
          <VideoContainer>
            <Video controls height="400px" poster={splashScreen}>
              <source src={videoLesdozor} type='video/mp4' />
              <a download href={videoLesdozor}>Скачать видео.</a>
            </Video>
          </VideoContainer>
        </Presentations>
        <Trophies>
          <Title text="Наши дипломы и сертификаты" />
          <TrophiesContainer>
            {
              certificates.map((certificate) => (
                <Trophy key={certificate.entity} onClick={() => this.onTrophyClick(certificate.entity)}>
                  <DownloadLinkA>
                    <TrophyImage src={certificate.icon} />
                  </DownloadLinkA>
                </Trophy>
              ))
            }
          </TrophiesContainer>
        </Trophies>
        { this.state.isTrophyOpened &&
          <TrophyOverlay
            isTrophyOpened={this.state.isTrophyOpened}
            trophyLink={this.state.trophyLink}
            closeTrophy={this.closeTrophy}
          />
        }
      </Content>
    );
  }
}

class TrophyOverlay extends React.PureComponent<any, any> {
  trophyDownloadButton: HTMLAnchorElement;

  constructor(props: IDownloadProps) {
    super(props);

    this.state = {
      overlayHeight: window.innerHeight * 0.9,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.recalculateOverlayHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.recalculateOverlayHeight);
  }

  recalculateOverlayHeight = () => {
    const overlayHeight = this.calculateOverlayHeight();

    if (overlayHeight !== this.state.overlayHeight) {
      this.setState({
        overlayHeight,
      });
    }
  };

  calculateOverlayHeight = () => {
    if (!this.trophyDownloadButton) {
      return;
    }

    const buttonComputedStyle = window.getComputedStyle(this.trophyDownloadButton);
    const buttonMarginTop = parseInt(buttonComputedStyle.getPropertyValue('margin-top'));
    const buttonMarginBottom = parseInt(buttonComputedStyle.getPropertyValue('margin-bottom'));
    const buttonSize = this.trophyDownloadButton.offsetHeight + buttonMarginTop + buttonMarginBottom;
    const overlayHeight = (window.innerHeight - buttonSize) * 0.9;

    return overlayHeight;
  };

  setTrophyDownloadButton = (element: HTMLAnchorElement) => {
    this.trophyDownloadButton = element;

    const overlayHeight = this.calculateOverlayHeight();
    this.setState({
      overlayHeight,
    });
  }

  render() {
    const modalStyle = {
      position: 'fixed',
      top: 0, bottom: 0, left: 0, right: 0,
      zIndex: 999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    } as React.CSSProperties;

    const backdropStyle = {
      position: 'fixed',
      top: 0, bottom: 0, left: 0, right: 0,
      zIndex: 998,
      backgroundColor: '#000',
      opacity: 0.5
    } as React.CSSProperties;

    const { isTrophyOpened, trophyLink, closeTrophy } = this.props;

    return (
      <Modal
        autoFocus={true}
        style={modalStyle}
        backdropStyle={backdropStyle}
        show={isTrophyOpened}
        onHide={closeTrophy}
      >
        <TrophyOverlayContainer style={ { height: `${this.state.overlayHeight}px`, } }>
          <TrophyFullScreen src={trophyLink} onClick={closeTrophy} />
          <TrophyDownloadButton
            download
            href={trophyLink}
            innerRef={this.setTrophyDownloadButton}
          >
            Скачать
          </TrophyDownloadButton>
        </TrophyOverlayContainer>
      </Modal>
    );
  }
}
