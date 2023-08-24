import { IEntity } from 'src/types/entity.interface'

interface IEntityRendererProps {
  entity: IEntity
  maxWidth?: number
  maxHeight?: number
}

const EntityRenderer = ({
  entity,
  maxHeight,
  maxWidth,
}: IEntityRendererProps) => {
  if (!entity) {
    return <div className="h-full w-full bg-gray-200"></div>
  }

  function parseStyle(cssString: string) {
    // Remove the curly braces and trim the string
    const cleanedString = cssString.replace(/[\{\}]/g, '').trim()

    // Split the cleaned string by semicolons
    const properties = cleanedString.split(';').filter(Boolean)

    // Initialize an empty object to hold our styles
    const styleObject = {}

    properties.forEach((property) => {
      // Split each property by the colon to get name and value
      const [name, value] = property.split(':').map((str) => str.trim())

      // Convert CSS property names to camelCase for React
      const camelCaseName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())

      // Add the property to our style object
      styleObject[camelCaseName] = value
    })

    if (maxHeight) {
      styleObject['maxHeight'] = maxHeight
    }

    if (maxWidth) {
      styleObject['maxWidth'] = maxWidth
    }

    return styleObject
  }

  if (entity?.image) {
    return (
      <img
        data-testid="entity-image"
        src={entity.image}
        style={{ ...parseStyle(entity.css) }}
        alt="entity"
      />
    )
  }

  return (
    <div
      data-testid="entity-html"
      dangerouslySetInnerHTML={{ __html: entity.html }}
      style={{ ...parseStyle(entity.css) }}
    ></div>
  )
}

export default EntityRenderer
