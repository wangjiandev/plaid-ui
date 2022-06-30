export interface IAction {
  id: string
  actionTitle: string
}

export interface IFeature {
  id: string
  featureTitle: string
  actions: IAction[]
}

export interface ICollection {
  id: string
  collectionTitle: string
  features: IFeature[]
}
