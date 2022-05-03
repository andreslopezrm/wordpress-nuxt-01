export function replaceLinksInSingle(content: string): string {
    const findSingle = `href="https://wordpressclasicouno.alrserver.online`;
    const replaceSingle = 'href="/single';
  
    const findCategory = `href="https://wordpressclasicouno.alrserver.online/category`;
    const replaceCategory = 'href="/category';
  
    let newContent = content.split(findCategory).join(replaceCategory);
    return newContent.split(findSingle).join(replaceSingle);
  }