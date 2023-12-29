export async function useQueryPost(dir: string, key?: string) {
  const routes = useRoute()
  let slug = ''
  if (routes.params)
    slug = `/${useRoute().params.slug.toString()}`

  const { data } = await useAsyncData(key || dir, () => {
    return queryContent(`/${dir}${slug}`).findOne()
  })
  return data
}
