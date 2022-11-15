import mongoose from 'mongoose'

export class MongoHelper {
  private static instance?: MongoHelper
  private connection?: mongoose.Connection

  private constructor () {}

  static getInstance (): MongoHelper {
    if (MongoHelper.instance === undefined) MongoHelper.instance = new MongoHelper()
    return MongoHelper.instance
  }

  async connect (url: string): Promise<void> {
    this.connection = (await mongoose.connect(url)).connection
  }

  getRepository <Model> (name: string, schema: mongoose.Schema<Model>): mongoose.Model<Model> {
    if (this.connection === undefined) throw new Error()
    return mongoose.model<Model>(name, schema)
  }
}

export abstract class MongoRepository {
  constructor (private readonly connection: MongoHelper = MongoHelper.getInstance()) {}

  getRepository<Model> (name: string, schema: mongoose.Schema<Model>): mongoose.Model<Model> {
    return this.connection.getRepository(name, schema)
  }
}
