# KWS2100-GIS

- A Map object needs a View to [control](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) how to  display the map.
- A Layer provides geospatial data that is [vector](https://gisgeography.com/spatial-data-types-vector-raster/) or [raster](https://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/what-is-raster-data.htm) information.
  - Vectors are polygons i.e. used for boundaries and borders.
  - Raster are cells/tiles i.e. used for projections, Google Maps projection into tiles.
  - Overlay creates a container that displays added layers.
- Interface does not have UI controls by default
  - Drawing needs to be implemented
- Control
  - Default controls are zooming and rotating
  - The rotation are calculated in [radians](https://www.mathsisfun.com/geometry/radians.html) inside View.

```mermaid
flowchart BT
A[Map]
B[1. View]
C[2. Layer - overlay]
D[3. Interaction]
E[4. Controls]
A--->B
A--->C
A--->D
A--->E
```

---

## Layers

- Tile Source 
  - URL tile
    - Tile Image & Vector Tile
      - Bing Maps, XYZ (CartoDB, OSM)
  - UTF Grid