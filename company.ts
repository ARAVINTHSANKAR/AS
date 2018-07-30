import { Document, Schema, model } from 'mongoose'

// 1) CLASS
export class User {
  name: string
  mail: string

  constructor(data: {
    mail: string
    name: string
  }) {
    this.mail = data.mail
    this.name = data.name
  }
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  mail: { required: true, type: String },
  name: { required: false, type: String }
})

// 2) Document
export interface UserDocument extends User, Document { }

// 3) MODEL
export const Users = model<UserDocument>('User', schema)