type Mods = Record<string, boolean | string>

type AdditionalParam = string | undefined;

type Additional = AdditionalParam[]

export function classNames(cls: string, mods: Mods = {}, additional: Additional = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
