import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import * as S from './MusicPlayer.styles';

const DEFAULT_TRACKS = [
  { title: 'Track 1', src: require('../../../../asset/music/funky-jazz-big-band-piece-225127.mp3') },
  { title: 'Track 2', src: require('../../../../asset/music/the-best-jazz-club-in-new-orleans-164472.mp3') },
  { title: 'Track 3', src: require('../../../../asset/music/crosstown-funk-205896.mp3') },
  { title: 'Track 4', src: require('../../../../asset/music/pop-groove-226858.mp3') },
];

/**
 * BGM 플레이어 - 재사용 가능한 미니 플레이어
 */
export function MusicPlayer({ tracks = DEFAULT_TRACKS }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!tracks.length) return;
    const audio = new Audio(tracks[currentTrackIndex].src);
    audioRef.current = audio;
    const handleEnded = () => setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    audio.addEventListener('ended', handleEnded);
    if (isPlaying) audio.play();
    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, isPlaying, tracks]);

  const togglePlay = () => setIsPlaying((p) => !p);
  const goPrev = () => setCurrentTrackIndex((i) => (i === 0 ? tracks.length - 1 : i - 1));
  const goNext = () => setCurrentTrackIndex((i) => (i + 1) % tracks.length);

  if (!tracks.length) return null;

  return (
    <S.Wrapper>
      <S.SliderText>🎶 즐거운 쇼핑을 위해 BGM을 틀어보세요</S.SliderText>
      <S.Controls>
        <S.IconButton onClick={goPrev} aria-label="이전 곡">
          <FontAwesomeIcon icon={faStepBackward} />
        </S.IconButton>
        <S.IconButton onClick={togglePlay} aria-label={isPlaying ? '일시정지' : '재생'}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </S.IconButton>
        <S.IconButton onClick={goNext} aria-label="다음 곡">
          <FontAwesomeIcon icon={faStepForward} />
        </S.IconButton>
      </S.Controls>
    </S.Wrapper>
  );
}

export default MusicPlayer;
