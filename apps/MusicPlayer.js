// MusicPlayer.js

class MusicPlayer {
    constructor() {
        this.playlist = [];
        this.currentTrackIndex = -1;
    }

    addTrack(track) {
        this.playlist.push(track);
    }

    removeTrack(track) {
        this.playlist = this.playlist.filter(t => t !== track);
    }

    play() {
        if (this.playlist.length > 0) {
            this.currentTrackIndex = 0;
            console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
        } else {
            console.log('No tracks in the playlist.');
        }
    }

    nextTrack() {
        if (this.currentTrackIndex < this.playlist.length - 1) {
            this.currentTrackIndex++;
            console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
        } else {
            console.log('End of playlist.');
        }
    }

    previousTrack() {
        if (this.currentTrackIndex > 0) {
            this.currentTrackIndex--;
            console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
        } else {
            console.log('At the beginning of the playlist.');
        }
    }
}

// Example usage:
const player = new MusicPlayer();
player.addTrack('Song 1');
player.addTrack('Song 2');
player.play();
player.nextTrack();
player.previousTrack();