class Profile {
    constructor(profileName1, profileNickname1, profileBiografy1) {
        this._profileName = profileName1;
        this._profileNickname = "@" + profileNickname1;
        this._profileBiografy = profileBiografy1;
    }

    getName() {
        return this._profileName;
    } 

    getNickname() {
        return this._profileNickname;
    } 

    getBiografy() {
        return this._profileBiografy;
    } 
}

export default Profile;