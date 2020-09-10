(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@nguniversal/express-engine/schematics/install/utils", ["require", "exports", "@angular-devkit/schematics", "typescript", "@schematics/angular/utility/ast-utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const schematics_1 = require("@angular-devkit/schematics");
    const ts = require("typescript");
    const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
    function getTsSourceText(host, path) {
        const buffer = host.read(path);
        if (!buffer) {
            throw new schematics_1.SchematicsException(`Could not read file (${path}).`);
        }
        return buffer.toString();
    }
    exports.getTsSourceText = getTsSourceText;
    function getTsSourceFile(host, path) {
        return ts.createSourceFile(path, getTsSourceText(host, path), ts.ScriptTarget.Latest, true);
    }
    exports.getTsSourceFile = getTsSourceFile;
    function findAppServerModuleExport(host, mainPath) {
        const source = getTsSourceFile(host, mainPath);
        const allNodes = ast_utils_1.getSourceNodes(source);
        let exportDeclaration = null;
        for (const node of allNodes) {
            let exportDeclarationNode = node;
            // Walk up the parent until ExportDeclaration is found.
            while (exportDeclarationNode && exportDeclarationNode.parent
                && exportDeclarationNode.parent.kind !== ts.SyntaxKind.ExportDeclaration) {
                exportDeclarationNode = exportDeclarationNode.parent;
            }
            if (exportDeclarationNode !== null &&
                exportDeclarationNode.parent !== undefined &&
                exportDeclarationNode.parent.kind === ts.SyntaxKind.ExportDeclaration) {
                exportDeclaration = exportDeclarationNode.parent;
                break;
            }
        }
        return exportDeclaration;
    }
    exports.findAppServerModuleExport = findAppServerModuleExport;
    function findAppServerModulePath(host, mainPath) {
        const exportDeclaration = findAppServerModuleExport(host, mainPath);
        if (!exportDeclaration) {
            throw new schematics_1.SchematicsException('Could not find app server module export');
        }
        const moduleSpecifier = exportDeclaration.moduleSpecifier.getText();
        return moduleSpecifier.substring(1, moduleSpecifier.length - 1);
    }
    exports.findAppServerModulePath = findAppServerModulePath;
    function generateExport(sourceFile, elements, module) {
        const printer = ts.createPrinter();
        const exports = elements.map(element => ts.createExportSpecifier(undefined, element));
        const namedExports = ts.createNamedExports(exports);
        const moduleSpecifier = ts.createStringLiteral(module);
        const exportDeclaration = ts.createExportDeclaration(undefined, undefined, namedExports, moduleSpecifier);
        return printer.printNode(ts.EmitHint.Unspecified, exportDeclaration, sourceFile);
    }
    exports.generateExport = generateExport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2V4cHJlc3MtZW5naW5lL3NjaGVtYXRpY3MvaW5zdGFsbC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJEQUF1RTtJQUN2RSxpQ0FBaUM7SUFDakMscUVBQXFFO0lBRXJFLFNBQWdCLGVBQWUsQ0FBQyxJQUFVLEVBQUUsSUFBWTtRQUN0RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksZ0NBQW1CLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBTkQsMENBTUM7SUFFRCxTQUFnQixlQUFlLENBQUMsSUFBVSxFQUFFLElBQVk7UUFDdEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUZELDBDQUVDO0lBRUQsU0FBZ0IseUJBQXlCLENBQUMsSUFBVSxFQUNWLFFBQWdCO1FBQ3hELE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsMEJBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFJLGlCQUFpQixHQUFnQyxJQUFJLENBQUM7UUFFMUQsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLEVBQUU7WUFFM0IsSUFBSSxxQkFBcUIsR0FBbUIsSUFBSSxDQUFDO1lBRWpELHVEQUF1RDtZQUN2RCxPQUFPLHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLE1BQU07bUJBQ3pELHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDeEUscUJBQXFCLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDO2FBQ3REO1lBRUQsSUFBSSxxQkFBcUIsS0FBSyxJQUFJO2dCQUNoQyxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssU0FBUztnQkFDMUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dCQUN2RSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQyxNQUE4QixDQUFDO2dCQUN6RSxNQUFNO2FBQ1A7U0FDRjtRQUVELE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQTFCRCw4REEwQkM7SUFFRCxTQUFnQix1QkFBdUIsQ0FBQyxJQUFVLEVBQUUsUUFBZ0I7UUFDbEUsTUFBTSxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRSxPQUFPLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQVJELDBEQVFDO0lBRUQsU0FBZ0IsY0FBYyxDQUFDLFVBQXlCLEVBQ3pCLFFBQWtCLEVBQ2xCLE1BQWM7UUFDM0MsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDckMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsTUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFDdkUsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBWkQsd0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFNjaGVtYXRpY3NFeGNlcHRpb24sIFRyZWUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7Z2V0U291cmNlTm9kZXN9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9hc3QtdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHNTb3VyY2VUZXh0KGhvc3Q6IFRyZWUsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGJ1ZmZlciA9IGhvc3QucmVhZChwYXRoKTtcbiAgaWYgKCFidWZmZXIpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihgQ291bGQgbm90IHJlYWQgZmlsZSAoJHtwYXRofSkuYCk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHNTb3VyY2VGaWxlKGhvc3Q6IFRyZWUsIHBhdGg6IHN0cmluZyk6IHRzLlNvdXJjZUZpbGUge1xuICByZXR1cm4gdHMuY3JlYXRlU291cmNlRmlsZShwYXRoLCBnZXRUc1NvdXJjZVRleHQoaG9zdCwgcGF0aCksIHRzLlNjcmlwdFRhcmdldC5MYXRlc3QsIHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEFwcFNlcnZlck1vZHVsZUV4cG9ydChob3N0OiBUcmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpblBhdGg6IHN0cmluZyk6IHRzLkV4cG9ydERlY2xhcmF0aW9uIHwgbnVsbCB7XG4gIGNvbnN0IHNvdXJjZSA9IGdldFRzU291cmNlRmlsZShob3N0LCBtYWluUGF0aCk7XG4gIGNvbnN0IGFsbE5vZGVzID0gZ2V0U291cmNlTm9kZXMoc291cmNlKTtcblxuICBsZXQgZXhwb3J0RGVjbGFyYXRpb246IHRzLkV4cG9ydERlY2xhcmF0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIGFsbE5vZGVzKSB7XG5cbiAgICBsZXQgZXhwb3J0RGVjbGFyYXRpb25Ob2RlOiB0cy5Ob2RlIHwgbnVsbCA9IG5vZGU7XG5cbiAgICAvLyBXYWxrIHVwIHRoZSBwYXJlbnQgdW50aWwgRXhwb3J0RGVjbGFyYXRpb24gaXMgZm91bmQuXG4gICAgd2hpbGUgKGV4cG9ydERlY2xhcmF0aW9uTm9kZSAmJiBleHBvcnREZWNsYXJhdGlvbk5vZGUucGFyZW50XG4gICAgJiYgZXhwb3J0RGVjbGFyYXRpb25Ob2RlLnBhcmVudC5raW5kICE9PSB0cy5TeW50YXhLaW5kLkV4cG9ydERlY2xhcmF0aW9uKSB7XG4gICAgICBleHBvcnREZWNsYXJhdGlvbk5vZGUgPSBleHBvcnREZWNsYXJhdGlvbk5vZGUucGFyZW50O1xuICAgIH1cblxuICAgIGlmIChleHBvcnREZWNsYXJhdGlvbk5vZGUgIT09IG51bGwgJiZcbiAgICAgIGV4cG9ydERlY2xhcmF0aW9uTm9kZS5wYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgZXhwb3J0RGVjbGFyYXRpb25Ob2RlLnBhcmVudC5raW5kID09PSB0cy5TeW50YXhLaW5kLkV4cG9ydERlY2xhcmF0aW9uKSB7XG4gICAgICBleHBvcnREZWNsYXJhdGlvbiA9IGV4cG9ydERlY2xhcmF0aW9uTm9kZS5wYXJlbnQgYXMgdHMuRXhwb3J0RGVjbGFyYXRpb247XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhwb3J0RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQXBwU2VydmVyTW9kdWxlUGF0aChob3N0OiBUcmVlLCBtYWluUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZXhwb3J0RGVjbGFyYXRpb24gPSBmaW5kQXBwU2VydmVyTW9kdWxlRXhwb3J0KGhvc3QsIG1haW5QYXRoKTtcbiAgaWYgKCFleHBvcnREZWNsYXJhdGlvbikge1xuICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKCdDb3VsZCBub3QgZmluZCBhcHAgc2VydmVyIG1vZHVsZSBleHBvcnQnKTtcbiAgfVxuXG4gIGNvbnN0IG1vZHVsZVNwZWNpZmllciA9IGV4cG9ydERlY2xhcmF0aW9uLm1vZHVsZVNwZWNpZmllciEuZ2V0VGV4dCgpO1xuICByZXR1cm4gbW9kdWxlU3BlY2lmaWVyLnN1YnN0cmluZygxLCBtb2R1bGVTcGVjaWZpZXIubGVuZ3RoIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUV4cG9ydChzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHByaW50ZXIgPSB0cy5jcmVhdGVQcmludGVyKCk7XG4gIGNvbnN0IGV4cG9ydHMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PlxuICAgIHRzLmNyZWF0ZUV4cG9ydFNwZWNpZmllcih1bmRlZmluZWQsIGVsZW1lbnQpKTtcbiAgY29uc3QgbmFtZWRFeHBvcnRzID0gdHMuY3JlYXRlTmFtZWRFeHBvcnRzKGV4cG9ydHMpO1xuICBjb25zdCBtb2R1bGVTcGVjaWZpZXIgPSB0cy5jcmVhdGVTdHJpbmdMaXRlcmFsKG1vZHVsZSk7XG4gIGNvbnN0IGV4cG9ydERlY2xhcmF0aW9uID0gdHMuY3JlYXRlRXhwb3J0RGVjbGFyYXRpb24odW5kZWZpbmVkLCB1bmRlZmluZWQsXG4gICAgbmFtZWRFeHBvcnRzLCBtb2R1bGVTcGVjaWZpZXIpO1xuXG4gIHJldHVybiBwcmludGVyLnByaW50Tm9kZSh0cy5FbWl0SGludC5VbnNwZWNpZmllZCwgZXhwb3J0RGVjbGFyYXRpb24sIHNvdXJjZUZpbGUpO1xufVxuIl19