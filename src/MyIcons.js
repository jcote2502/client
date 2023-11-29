import jerseyIcon from './assets/images/jersey.jpeg';
import joggersIcon from './assets/images/joggers.jpeg';
import sandalIcon from './assets/images/sandal.png';
import shirtIcon from './assets/images/shirt.png';
import shortIcon from './assets/images/shorts.jpeg';
import sneakerIcon from './assets/images/sneaker.png';


class MyIcons {
    constructor(){
        this.jerseyIcon = jerseyIcon;
        this.joggersIcon = joggersIcon;
        this.sandalIcon = sandalIcon;
        this.shirtIcon = shirtIcon;
        this.shortIcon = shortIcon;
        this.sneakerIcon = sneakerIcon;
    }
    getJerseyIcon(){
        return this.jerseyIcon;
    }
    getJoggersIcon(){
        return this.joggersIcon;
    }
    getSandalIcon(){
        return this.sandalIcon;
    }
    getShirtIcon(){
        return this.shirtIcon;
    }
    getShortIcon(){
        return this.shirtIcon;
    }
    getSneakerIcon(){
        return this.sneakerIcon;
    }
}

const myIcons = new MyIcons();
export default myIcons;