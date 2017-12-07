const execa = require('execa');

export function npmPublish({cwd, yarn, tag = '', access = ''}) {
  // const args = [yarn ? 'yarn --new-version' : 'npm', 'publish', cwd];
  // todo: next time yarn, next time
  const args = ['npm', 'publish', cwd];
  if (tag) {
    args.push('--tag', tag);
  }
  if (access) {
    args.push('--access', access);
  }
  return execa.shell(args.join(' '), {preferLocal: true});
}
