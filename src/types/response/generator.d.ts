import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty, InventoryItemObject} from '../general';
import {Building} from '../../enums/building';

type GeneratorObject<ClassName> = ClassObject<ClassName> & {
  location: CoordinatesWithRotation;
  CircuitID: number;
  BaseProd: number;
  DynamicProdCapacity: number;
  DynamicProdDemandFactor: number;
  RegulatedDemandProd: number;
  IsFullSpeed: boolean;
  CanStart: boolean;
  LoadPercentage: number;
  ProdPowerConsumption: number;
  CurrentPotential: number;
  ProductionCapacity: number;
  DefaultProductionCapacity: number;
  PowerProductionPotential: number;
  FuelAmount: number;
  Supplement: ClassObject & {
    Name: 'N/A' | string;
    CurrentConsumed: number;
    MaxConsumed: number;
    PercentFull: number;
  };
  NuclearWarning: string;
  FuelResource: 'Unknown' | 'Geothermal';
  GeoMinPower: number;
  GeoMaxPower: number,
  AvailableFuel: InventoryItemObject[];
  WasteInventory: [];
  features: Features<FeaturesProperty>;
};

type GetGeneratorsResponse = GeneratorObject<
  Building.FuelGenerator |
  Building.CoalGenerator |
  Building.BiomassBurner |
  Building.GeothermalGenerator |
  Building.NuclearPowerPlant
>[];
type GetCoalGeneratorResponse = GeneratorObject<Building.CoalGenerator>[];
type GetFuelGeneratorResponse = GeneratorObject<Building.FuelGenerator>[];
type GetNuclearGeneratorResponse = GeneratorObject<Building.NuclearPowerPlant>[];
type GetGeothermalGeneratorResponse = GeneratorObject<Building.GeothermalGenerator>[];
type GetBiomassGeneratorResponse = GeneratorObject<Building.BiomassBurner>[];

export type {
  GeneratorObject,
  GetGeneratorsResponse,
  GetCoalGeneratorResponse,
  GetFuelGeneratorResponse,
  GetNuclearGeneratorResponse,
  GetGeothermalGeneratorResponse,
  GetBiomassGeneratorResponse,
}