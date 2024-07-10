"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTwofaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_twofa_dto_1 = require("./create-twofa.dto");
class UpdateTwofaDto extends (0, mapped_types_1.PartialType)(create_twofa_dto_1.CreateTwofaDto) {
}
exports.UpdateTwofaDto = UpdateTwofaDto;
//# sourceMappingURL=update-twofa.dto.js.map