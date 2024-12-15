import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  externals: ['element-plus'],
  rollup: {
    emitCJS: true,
    esbuild: {
      charset: 'utf8',
    },
  },
})
