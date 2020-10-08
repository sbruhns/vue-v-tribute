import { VueConstructor, PluginObject } from 'vue/types';
import { TributeOptions } from 'tributejs';
import VTribute from './directives/VTribute';

class VueVTribute implements PluginObject<TributeOptions<{}>> {
  public install(Vue: VueConstructor, options?: TributeOptions<{}>) {
    if (options != null) {
      Vue.directive('tribute', new VTribute(options));
    }
  }
}

export default new VueVTribute();
