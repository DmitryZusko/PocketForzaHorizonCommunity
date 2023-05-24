using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PocketForzaHorizonCommunity.Back.Database.Migrations
{
    /// <inheritdoc />
    public partial class AddRatingBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_Designs_DesignId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_Tunes_TuneId",
                table: "TunesRating");

            migrationBuilder.RenameColumn(
                name: "TuneId",
                table: "TunesRating",
                newName: "EntityId");

            migrationBuilder.RenameIndex(
                name: "IX_TunesRating_TuneId",
                table: "TunesRating",
                newName: "IX_TunesRating_EntityId");

            migrationBuilder.RenameColumn(
                name: "DesignId",
                table: "DesignsRating",
                newName: "EntityId");

            migrationBuilder.RenameIndex(
                name: "IX_DesignsRating_DesignId",
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                newName: "TuneId");

            migrationBuilder.RenameIndex(
                name: "IX_TunesRating_EntityId",
                table: "TunesRating",
                newName: "IX_TunesRating_TuneId");

            migrationBuilder.RenameColumn(
                name: "EntityId",
                table: "DesignsRating",
                newName: "DesignId");

            migrationBuilder.RenameIndex(
                name: "IX_DesignsRating_EntityId",
                table: "DesignsRating",
                newName: "IX_DesignsRating_DesignId");

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_Designs_DesignId",
                table: "DesignsRating",
                column: "DesignId",
                principalTable: "Designs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_Tunes_TuneId",
                table: "TunesRating",
                column: "TuneId",
                principalTable: "Tunes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
