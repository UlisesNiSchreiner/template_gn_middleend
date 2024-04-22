import container from "../../infraestructure/containers"
import { LogicStep } from 'graph-navigation-js'
import DesktopWelcomeTemplate from './DesktopWelcomeTemplate'

const instance = container.resolve('desktopVersion')

export default function initDesktopVersion() {
    const entryStep = new LogicStep('entry_step')

    instance.nexFrom(entryStep, DesktopWelcomeTemplate)
}
