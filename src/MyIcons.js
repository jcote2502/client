import jerseyIcon from './Components/Assets/images/jersey.jpeg';
import joggersIcon from './Components/Assets/images/joggers.jpeg';
import sandalIcon from './Components/Assets/images/sandal.png';
import shirtIcon from './Components/Assets/images/shirt.png';
import shortIcon from './Components/Assets/images/shorts.jpeg';
import sneakerIcon from './Components/Assets/images/sneaker.png';


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