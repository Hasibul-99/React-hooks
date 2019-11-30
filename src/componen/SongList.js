import React, {useState, useEffect} from 'react'
import uuid from 'uuid/v1';

const SongList = () => {
    const [songs, setSongs] = useState ([
        {title: 'almost Headers', id: 1},
        {title: "eture", id: 2},
        {title: 'b', id: 3}
    ]);

    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: uuid()}])
    }

    useEffect(() => {
        console.log('asa', songs);
    });

    return (
        <div className="song-list">
            <ul>
            {
                songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })
            }
            </ul>
            <button onClick={addSong}>add</button>
        </div>
    );
}

export default SongList;
