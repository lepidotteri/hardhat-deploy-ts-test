
import { BuidlerRuntimeEnvironment, DeployFunction } from "@nomiclabs/buidler/types";

const func: DeployFunction = async function(bre : BuidlerRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = bre;
    const {execute, log, read} = deployments;
    const {deployer, admin} = await getNamedAccounts();

    const currentAdmin = await read("Greeter", "getAdmin");
    await execute("Greeter", {from: currentAdmin}, "setAdmin", admin);
    log(`admin set to ${admin}`);
}
export default func;
func.runAtTheEnd = true;
