import container from "../../infraestructure/containers"
import { LogicStep } from 'graph-navigation-js'
import AndroidMobileWelcomeTemplate from './AndroidMobileWelcomeTemplate'

const instance = container.resolve('androidMobile')

export default function initAndroidMobileVersion() {
    const entryStep = new LogicStep('entry_step')

    instance.nexFrom(entryStep, AndroidMobileWelcomeTemplate)
}
