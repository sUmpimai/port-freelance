export class Project {
  id: number | undefined;
  name: string = '';
  description: string = '';
  imageUrl: string = '';
  platform: string = '';
  deliver: string = '';
  websiteUrl: string = '';

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.platform) this.platform = initializer.platform;
    if (initializer.deliver) this.deliver = initializer.deliver;
    if (initializer.websiteUrl) this.websiteUrl = initializer.websiteUrl;
  }
}