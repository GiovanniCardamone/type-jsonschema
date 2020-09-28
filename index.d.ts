export type JsonSchema =
  | RefJsonSchema
  | StringJsonSchema
  | NumberJsonSchema
  | ObjectJsonSchema
  | ArrayJsonSchema
  | BooleanJsonSchema
  | NullJsonSchema

export type JsonSchemaProperty =
  | RefJsonSchemaProperty
  | StringJsonSchemaProperty
  | NumberJsonSchemaProperty
  | ObjectJsonSchemaProperty
  | ArrayJsonSchemaProperty
  | BooleanJsonSchemaProperty
  | NullJsonSchemaProperty
  | AnyOfSchemaProperty
  | AllOfSchemaProperty
  | OneOfSchemaProperty

export type JsonPropertiesTypes = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null'

interface BaseJsonSchema {
  $schema?: string
  $id?: string
  title?: string
  description?: string
  required?: string[]
  [key: string]: any
}

interface BaseJsonSchemaProperty {
  description?: string
  [key: string]: any
}

type AnyOfSchemaProperty = JsonSchemaProperty[]
type AllOfSchemaProperty = JsonSchemaProperty[]
type OneOfSchemaProperty = JsonSchemaProperty[]

export interface RefJsonSchemaProperty extends BaseJsonSchemaProperty {
  $ref: string
}

export interface StringJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'string'
  minLength?: number
  maxLength?: number
  pattern?: string
  format?:
    | 'date-time'
    | 'time'
    | 'date'
    | 'email'
    | 'idn-email'
    | 'hostname'
    | 'idn-hostname'
    | 'ipv4'
    | 'ipv6'
    | 'uri'
    | 'uri-reference'
    | 'iri'
    | 'iri-reference'
    | 'uri-template'
    | 'json-pointer'
    | 'relative-json-pointer'
    | 'regex'
    | 'string'
}

export interface NumberJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'number'
  multipleOf?: number
  minimum?: number
  exclusiveMinimum?: number
  maximum?: number
  exclusiveMaximum?: number
}

export interface ObjectJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'object'
  properties: {
    [key: string]: JsonSchemaProperty
  }
  additionalProperties?: boolean
  required?: string[]
  propertyNames?: {
    pattern?: string
  }
  minProperties?: number
  maxProperties?: number
  dependencies?: {
    [key: string]: string[] | JsonSchemaProperty
  }
  patternProperties?: {
    [key: string]: { type: JsonPropertiesTypes }
  }
}

export interface ArrayJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'array'
  items: JsonSchemaProperty | JsonSchemaProperty[]
  contains?: JsonSchemaProperty
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
}

export interface BooleanJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'boolean'
}

export interface NullJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'null'
}

export type RefJsonSchema = BaseJsonSchema & RefJsonSchemaProperty
export type StringJsonSchema = BaseJsonSchema & StringJsonSchemaProperty
export type NumberJsonSchema = BaseJsonSchema & NumberJsonSchemaProperty
export type ObjectJsonSchema = BaseJsonSchema & ObjectJsonSchemaProperty
export type ArrayJsonSchema = BaseJsonSchema & ArrayJsonSchemaProperty
export type BooleanJsonSchema = BaseJsonSchema & BooleanJsonSchemaProperty
export type NullJsonSchema = BaseJsonSchema & NullJsonSchemaProperty
