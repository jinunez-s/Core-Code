function list(names){
    let len = names.length;
    if(len ==0)return '';
    return names.slice(0, len-1).map(p => p.name).join(', ') + (len > 1 ? ' & ' : '') + names[len-1].name;
  }
  list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);