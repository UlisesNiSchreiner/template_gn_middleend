import container from "../../infraestructure/containers"
import { LogicStep } from 'graph-navigation-js'
import WebMobileWelcomeTemplate from './WebMobileWelcomeTemplate'

const instance = container.resolve('mobileVersion')

export default function initMobileVersion() {
    const entryStep = new LogicStep('entry_step')

    instance.nexFrom(entryStep, WebMobileWelcomeTemplate)
}
