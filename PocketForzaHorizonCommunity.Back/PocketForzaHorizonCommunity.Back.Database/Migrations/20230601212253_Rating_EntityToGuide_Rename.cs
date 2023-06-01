using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PocketForzaHorizonCommunity.Back.Database.Migrations
{
    /// <inheritdoc />
    public partial class Rating_EntityToGuide_Rename : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_Designs_EntityId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_Tunes_EntityId",
                table: "TunesRating");

            migrationBuilder.RenameColumn(
                name: "EntityId",
                table: "TunesRating",
                newName: "GuideEntityId");

            migrationBuilder.RenameIndex(
                name: "IX_TunesRating_EntityId",
                table: "TunesRating",
                newName: "IX_TunesRating_GuideEntityId");

            migrationBuilder.RenameColumn(
                name: "EntityId",
                table: "DesignsRating",
                newName: "GuideEntityId");

            migrationBuilder.RenameIndex(
                name: "IX_DesignsRating_EntityId",
                table: "DesignsRating",
                newName: "IX_DesignsRating_GuideEntityId");

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_Designs_GuideEntityId",
                table: "DesignsRating",
                column: "GuideEntityId",
                principalTable: "Designs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_Tunes_GuideEntityId",
                table: "TunesRating",
                column: "GuideEntityId",
                principalTable: "Tunes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_Designs_GuideEntityId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_Tunes_GuideEntityId",
                table: "TunesRating");

            migrationBuilder.RenameColumn(
                name: "GuideEntityId",
                table: "TunesRating",
                newName: "EntityId");

            migrationBuilder.RenameIndex(
                name: "IX_TunesRating_GuideEntityId",
                table: "TunesRating",
                newName: "IX_TunesRating_EntityId");

            migrationBuilder.RenameColumn(
                name: "GuideEntityId",
                table: "DesignsRating",
                newName: "EntityId");

            migrationBuilder.RenameIndex(
                name: "IX_DesignsRating_GuideEntityId",
                table: "DesignsRating",
                newName: "IX_DesignsRating_EntityId");

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_Designs_EntityId",
                table: "DesignsRating",
                column: "EntityId",
                principalTable: "Designs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_Tunes_EntityId",
                table: "TunesRating",
                column: "EntityId",
                principalTable: "Tunes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
