import { SaveProduct } from '@/domain/contracts/repositories'
import { UploadFile, UUIDGenerator } from '@/domain/contracts/gateways'

type Setup = (productRepo: SaveProduct, fileStorage: UploadFile, crypto: UUIDGenerator) => CreateProduct
type Input = Omit<SaveProduct.Input, 'imagePath'> & { file: { buffer: Buffer, mimeType: string } }
type Output = SaveProduct.Output
export type CreateProduct = (input: Input) => Promise<Output>

export const setupCreateProduct: Setup = (productRepo, fileStorage, crypto) => async ({ name, description, price, ingredients, category, file }) => {
  const key = crypto.uuid({ key: Date.now().toString() })
  const imagePath = await fileStorage.upload({ file: file.buffer, fileName: `${key}.${file.mimeType.split('/')[1]}`, mimeType: file.mimeType })
  return productRepo.save({ name, description, price, ingredients, category, imagePath })
}
