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

interface RefJsonSchemaProperty extends BaseJsonSchemaProperty {
  $ref: string
}

interface StringJsonSchemaProperty extends BaseJsonSchemaProperty {
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

interface NumberJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'number'
  multipleOf?: number
  minimum?: number
  exclusiveMinimum?: number
  maximum?: number
  exclusiveMaximum?: number
}

interface ObjectJsonSchemaProperty extends BaseJsonSchemaProperty {
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

interface ArrayJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'array'
  items: JsonSchemaProperty | JsonSchemaProperty[]
  contains?: JsonSchemaProperty
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
}

interface BooleanJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'boolean'
}

interface NullJsonSchemaProperty extends BaseJsonSchemaProperty {
  type: 'null'
}

type RefJsonSchema = BaseJsonSchema & RefJsonSchemaProperty
type StringJsonSchema = BaseJsonSchema & StringJsonSchemaProperty
type NumberJsonSchema = BaseJsonSchema & NumberJsonSchemaProperty
type ObjectJsonSchema = BaseJsonSchema & ObjectJsonSchemaProperty
type ArrayJsonSchema = BaseJsonSchema & ArrayJsonSchemaProperty
type BooleanJsonSchema = BaseJsonSchema & BooleanJsonSchemaProperty
type NullJsonSchema = BaseJsonSchema & NullJsonSchemaProperty
