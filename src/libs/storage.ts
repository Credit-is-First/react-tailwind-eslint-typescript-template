const Storage = {
  set<T>(key: string, value: T) {
    if (value === undefined) return
    const stringify = JSON.stringify(value)
    localStorage.setItem(key, stringify)
  },
  get<T>(key: string, defaultValue: T | null = null): T | null {
    const stringify = localStorage.getItem(key)
    if (stringify === null) return defaultValue
    return JSON.parse(stringify)
  },
  clear() {
    localStorage.clear()
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}

export const TOKEN_STORAGE_KEY = '_token_'

export default Storage
