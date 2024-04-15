import UnderwaterPlant from "../objects/UnderwaterPlant";

export function setupPlants(scene){
    let underwaterPlant = new UnderwaterPlant(scene);
    underwaterPlant.setPosition(1,0.5,1)
}