import {homePage} from './homePage'
import {service} from './service'
import {teamMember} from './teamMember'
import {testimonial} from './testimonial'

export const schemaTypes = [homePage, service, teamMember, testimonial]

/** Typer som bare skal finnes i ett eksemplar. */
export const singletonTypes = new Set(['homePage'])
