import { TributeOptions } from 'tributejs';
import { DirectiveOptions } from 'vue';
import { DirectiveBinding, DirectiveFunction } from 'vue/types/options';
import Tribute from 'tributejs';

class VTribute implements DirectiveOptions {
  private options: TributeOptions<{}> | null = null;

  constructor(options: TributeOptions<{}>) {
    this.options = options;
  }

  bind: DirectiveFunction = (element: HTMLElement, binding: DirectiveBinding) => {
    let inputElement: HTMLElement | null = null
    if (element.nodeName == "INPUT" || element.nodeName == "TEXTAREA") {
      inputElement = element
    } else {
      inputElement = element.querySelector('textarea,input');
    }
    const mergedOptions = Object.assign(this.options, binding.value);

    if (inputElement) {
      const tribute = new Tribute(mergedOptions);
      tribute.attach(inputElement);
    }
  };
}

export default VTribute;
