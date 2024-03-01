'use client';

import { PlayFill, SkipEndFill, SkipStartFill } from 'react-bootstrap-icons';

const PlayerControls = () => {
  // TODO: add useMusicPlayer

  return (
    <div>
      <div>
        <p>HERE WILL BE CURRENT TRACK NAME</p>
      </div>
      <button>
        <SkipStartFill />
      </button>
      <button>
        <PlayFill />
      </button>
      <button>
        <SkipEndFill />
      </button>
    </div>
  );
};

export default PlayerControls;
