const svgModules = import.meta.glob('@/svgs/*.svg')

export function svgModulePathPrefix () {
  const path = Object.keys(svgModules)[0]
  const lastIndex = path.lastIndexOf('/')
  return path.slice(0, lastIndex+1)
  
}

export async function loadSVG(name: string) {
  const svgPath = `${svgModulePathPrefix()}${name}.svg`;
  if (svgPath in svgModules) {
    const module = await svgModules[svgPath]()
    return (module as { default: any}).default
  } else {
    throw new Error(`SVG not found: ${svgPath}`);
  }
}

export default svgModules