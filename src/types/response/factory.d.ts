import type {
  IDClassObject,
  Features,
  HasLocationWIthRotation,
  InventoryItemObject,
  PowerInfoObject,
} from '../general';
import type {Building} from '../../enums/building';

type FactoryType = Building.Refinery
  | Building.Constructor
  | Building.Smelter
  | Building.Blender
  | Building.Manufacturer
  | Building.Assembler
  | Building.ParticleAccelerator
  | Building.Foundry;

type FactoryIngredientObject = InventoryItemObject & {
  CurrentConsumed: number;
  MaxConsumed: number;
  ConsPercent: number;
};

type FactoryProductionObject = InventoryItemObject & {
  CurrentProd: number;
  MaxProd: number;
  ProdPercent: number;
};

type FactoryObject<Type extends FactoryType = FactoryType> = IDClassObject<Type> & HasLocationWIthRotation & {
  Recipe: string;
  RecipeClassName: string;
  production: FactoryProductionObject[];
  ingredients: FactoryIngredientObject[];
  Productivity: number;
  ManuSpeed: number;
  IsConfigured: boolean;
  IsProducing: boolean;
  IsPaused: boolean;
  PowerInfo: PowerInfoObject[];
  features: Features;
};

type HypertubeObject = HasLocationWIthRotation & {
  Name: string;
  PowerInfo: PowerInfoObject;
};

type FrackingActivatorObject = HasLocationWIthRotation & {
  Name: string;
  PowerInfo: PowerInfoObject;
};

type GetFactoryResponse = FactoryObject[];
type GetSmelterResponse = FactoryObject<Building.Smelter>[];
type GetConstructorResponse = FactoryObject<Building.Constructor>[];
type GetAssemblerResponse = FactoryObject<Building.Assembler>[];
type GetFoundryResponse = FactoryObject<Building.Foundry>[];
type GetManufacturerResponse = FactoryObject<Building.Manufacturer>[];
type GetRefineryResponse = FactoryObject<Building.Refinery>[];
type GetBlenderResponse = FactoryObject<Building.Blender>[];
type GetParticleResponse = FactoryObject<Building.ParticleAccelerator>[];
type GetPackagerResponse = FactoryObject<Building.Packager>[];

type GetFrackingActivatorResponse = FrackingActivatorObject[];
type GetHypertubeResponse = HypertubeObject[];

export type {
  FactoryType,
  FactoryObject,
  FactoryIngredientObject,
  FactoryProductionObject,
  FactoryPowerInfoObject,
  HypertubeObject,
  FrackingActivatorObject,
  GetFactoryResponse,
  GetSmelterResponse,
  GetConstructorResponse,
  GetAssemblerResponse,
  GetFoundryResponse,
  GetManufacturerResponse,
  GetRefineryResponse,
  GetBlenderResponse,
  GetParticleResponse,
  GetPackagerResponse,
  GetFrackingActivatorResponse,
  GetHypertubeResponse,
}