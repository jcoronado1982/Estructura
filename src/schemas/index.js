import en from '../languages/en.json';
import api from '../api.json';
import { normalize, schema } from 'normalizr';

// const media = new schema.Entity(key, definición de mi esquema, opciones)
/*
const idSearcher = new schema.Entity('idSearcher', {}, {
  idAttribute: 'key',
  processStrategy: (value, parent, key) => ({...value, searcher:parent.key })
})
const vGrid = new schema.Entity('grids', {
  data: new schema.Array(idSearcher)
})
*/

const vGrid = new schema.Entity('grids', {
 // playlist: new schema.Array(idSearcher)
})
const vSessions = new schema.Entity('sessions', {
  
 })

const normalizedDataGrids = { grids: new schema.Array(vGrid)}
const sessions = { sessions: new schema.Array(vSessions)}

const normalizedData = normalize(api, normalizedDataGrids);
const sessionsData = normalize(en, sessions);

export default {normalizedData,sessionsData};